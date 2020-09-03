export interface ActionButtonProps {
  active: boolean
  bgColor: string
  buttonColor: string
  buttonTextColor: string
  size: number
  itemSize: number
  autoInactive: boolean
  onPress(): void
  onOverlayPress(): void
  onLongPress(): void
  backdrop: boolean | {}
  startDegree: number
  endDegree: number
  radius: number
  position: 'left' | 'center' | 'right'
  outRangeScale: number
  btnOutRange: string
  degrees: number
  btnOutRangeTxt: string
  icon: any
}
