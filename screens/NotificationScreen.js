import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import {Calendar} from 'react-native-calendars';



// Example events data
const events = [
  { date: '2025-03-15', title: 'Order #1234 Delivery' },
  { date: '2025-05-18', title: 'Flash Sale: Up to 50% Off!' },
  { date: '2025-05-21', title: 'Wishlist Item Back in Stock' },
   { date: '2025-06-21', title: 'Super Sale: Get Ready!' },
    { date: '2025-06-21', title: 'Wishlist Item Restocked' },
     { date: '2025-07-21', title: 'Shipping Update: Your Order is on the Way!' },
      { date: '2025-08-21', title: 'New Arrivals: Check Them Out!' },
       { date: '2025-09-21', title: 'Sale: Don\'t Miss Out!' },
        { date: '2025-10-21', title: 'Halloween Special: Get Spooky!' },

];

const markedDates = events.reduce((acc, event) => {
  acc[event.date] = { selected: true, selectedColor: '#F3F3F3' };
  return acc;
}, {});

export default function NotificationScreen() {
  const [selectedDate, setSelectedDate] = useState(null);
  const eventsForDate = events.filter(e => e.date === selectedDate);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No notifications yet!</Text>
      <View style={{ width: 300, paddingHorizontal: 16 }}>
        <Calendar
          style={styles.calendar}
          markedDates={{
            ...markedDates,
            ...(selectedDate && {
              [selectedDate]: {
                ...markedDates[selectedDate],
                selected: true,
                selectedColor: '#7f00ff',
              },
            }),
          }}
          onDayPress={day => setSelectedDate(day.dateString)}
        />
      </View>
      <View style={styles.eventsContainer}>
        {selectedDate && eventsForDate.length > 0 ? (
          <FlatList
            data={eventsForDate}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <View style={styles.eventItem}>
                <Text style={styles.eventText}>{item.title}</Text>
              </View>
            )}
          />
        ) : selectedDate ? (
          <Text style={styles.noEventText}>No events for this date.</Text>
        ) : (
          <Text style={styles.noEventText}>Select a date to see events.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 10,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 16,
    width: 350,
    marginTop: 10,
    alignSelf: 'center',
  },
  eventsContainer: {
    marginTop: 20,
    width: 350,
    minHeight: 60,
  },
  eventItem: {
    backgroundColor: '#f3f3f3',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  eventText: {
    color: '#333',
    fontSize: 16,
  },
  noEventText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});













