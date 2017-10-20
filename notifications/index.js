
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
const DECKS_NOTIFICATION_KEY = '@UdaciCards:deckNotification'

function createReminderNotification () {
  return {
    title: 'Hey you!',
    body: "Practice your flashcards!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
    ios: {
      sound: true,
    }
  }
}

export function setReminderNotification () {
  AsyncStorage.getItem(DECKS_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(19)
              tomorrow.setMinutes(30)

              Notifications.scheduledLocalNotificationsAsync(
                createReminderNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(DECKS_NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

export function clearReminderNotification () {
  return AsyncStorage.removeItem(DECKS_NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}