import React from 'react'
import { View, Text } from '@tarojs/components'
import './footer.scss'

function Footer ({ activeCount, completedCount, onClearCompleted }) {
  const itemWord = activeCount === 1 ? ' item' : ' items'
  return (
    <View className='footer'>
      <View className='todo-count'>
        <Text>{activeCount || 'No'}</Text> {itemWord}{' '}left
      </View>
      {!!completedCount && (
        <Text className='clear-completed-text' onTap={onClearCompleted}>
          Clear completed
        </Text>
      )}
    </View>
  )
}

export default Footer
