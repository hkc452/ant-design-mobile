import React, {
  forwardRef,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import type { InputProps } from '../input'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { NumberKeyboardProps } from '../number-keyboard'
import { usePropsValue } from '../../utils/use-props-value'
import classNames from 'classnames'
import { CloseCircleFill } from 'antd-mobile-icons'
import { useIsomorphicLayoutEffect } from 'ahooks'

const classPrefix = 'adm-virtual-input'

export type VirtualInputProps = {
  onFocus?: () => void
  onBlur?: () => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  keyboard?: ReactElement<NumberKeyboardProps>
  clearable?: boolean
  onClear?: () => void
} & Pick<InputProps, 'value' | 'onChange' | 'placeholder' | 'disabled'> &
  NativeProps<
    | '--font-size'
    | '--color'
    | '--placeholder-color'
    | '--disabled-color'
    | '--text-align'
    | '--caret-width'
    | '--caret-color'
  >

const defaultProps = {
  defaultValue: '',
}

export type VirtualInputRef = {
  focus: () => void
  blur: () => void
}

export const VirtualInput = forwardRef<VirtualInputRef, VirtualInputProps>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const [value, setValue] = usePropsValue(props)
    const rootRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [hasFocus, setHasFocus] = useState(false)

    function scrollToEnd() {
      const root = rootRef.current
      if (!root) return
      // 如果当前激活元素不是父元素，不需要处理滚动问题
      if (document.activeElement !== root) {
        return
      }
      const content = contentRef.current
      if (!content) return
      // 保持键盘可见
      content.scrollLeft = content.clientWidth
    }

    useIsomorphicLayoutEffect(() => {
      scrollToEnd()
    }, [value])
    useEffect(() => {
      if (hasFocus) {
        scrollToEnd()
      }
    }, [hasFocus])

    useImperativeHandle(ref, () => ({
      focus: () => {
        rootRef.current?.focus()
      },
      blur: () => {
        rootRef.current?.blur()
      },
    }))

    function onFocus() {
      setHasFocus(true)
      props.onFocus?.()
    }

    function onBlur() {
      setHasFocus(false)
      props.onBlur?.()
    }

    return withNativeProps(
      props,
      <div
        ref={rootRef}
        className={classNames(classPrefix, {
          [`${classPrefix}-disabled`]: props.disabled,
        })}
        tabIndex={props.disabled ? undefined : 0}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={props.onClick}
      >
        <div className={`${classPrefix}-content`} ref={contentRef}>
          {value}
          <div className={`${classPrefix}-caret-container`}>
            {hasFocus && <div className={`${classPrefix}-caret`} />}
          </div>
        </div>
        {props.clearable && !!value && hasFocus && (
          <div
            className={`${classPrefix}-clear`}
            onClick={e => {
              e.stopPropagation()
              setValue('')
              props.onClear?.()
            }}
          >
            <CloseCircleFill />
          </div>
        )}
        {!value && (
          <div className={`${classPrefix}-placeholder`}>
            {props.placeholder}
          </div>
        )}
        {props.keyboard &&
          React.cloneElement(props.keyboard, {
            onInput: v => {
              setValue(value + v)
            },
            onDelete: () => {
              setValue(value.slice(0, -1))
            },
            visible: hasFocus,
            onClose: () => {
              rootRef.current?.blur()
            },
          } as NumberKeyboardProps)}
      </div>
    )
  }
)
