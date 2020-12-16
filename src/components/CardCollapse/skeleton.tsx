import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {useTheme} from '../../hooks/theme'

const Skeleton: React.FC = () => {
  const {colors} = useTheme()
  return (
    <SkeletonPlaceholder backgroundColor={colors.background}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <SkeletonPlaceholder.Item width={110} height={20} borderRadius={4} />
        <SkeletonPlaceholder.Item width={60} height={10} borderRadius={4} />
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop={14}
        marginBottom={14}>
        <SkeletonPlaceholder.Item width={140} height={20} borderRadius={4} />
        <SkeletonPlaceholder.Item width={100} height={20} borderRadius={4} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default Skeleton
