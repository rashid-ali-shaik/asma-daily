import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment-hijri';

import allahNames from '../data/allahNames';
import NameCard from '../components/NameCard';

const START_DATE = new Date('2026-10-17');

const hijriMonths = [
  'Muharram',
  'Safar',
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  'Jumada al-Awwal',
  'Jumada al-Thani',
  'Rajab',
  "Sha'ban",
  'Ramadan',
  'Shawwal',
  "Dhu al-Qi'dah",
  'Dhu al-Hijjah',
];

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  const getAllahNameForDate = dateString => {
    const selected = new Date(dateString);

    const diffDays = Math.floor(
      (selected - START_DATE) / (1000 * 60 * 60 * 24),
    );

    const index =
      ((diffDays % allahNames.length) + allahNames.length) % allahNames.length;

    return allahNames[index];
  };

  const selectedName = getAllahNameForDate(selectedDate);
  const hijriMoment = moment(selectedDate);

  const hijriDay = hijriMoment.iDate();
  const hijriMonth = hijriMonths[hijriMoment.iMonth()];
  const hijriYear = hijriMoment.iYear();
  const hijriDate = `${hijriDay} ${hijriMonth} ${hijriYear} AH`;

  const formattedDate = new Date(selectedDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
        theme={{
          todayTextColor: '#0E7C66',
          selectedDayBackgroundColor: '#0E7C66',
          arrowColor: '#0E7C66',
          monthTextColor: '#0E7C66',
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#0E7C66',
          },
        }}
      />
      {selectedDate && (
        <>
          <View style={styles.dateContainer}>
            <Text style={styles.gregorianDate}>{formattedDate}</Text>

            <Text style={styles.hijriDate}>{hijriDate} AH</Text>
          </View>
          <NameCard data={selectedName} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  card: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },

  date: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },

  arabic: {
    fontSize: 36,
    marginBottom: 10,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  meaning: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  dateContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  gregorianDate: {
    fontSize: 18,
    fontWeight: '600',
  },

  hijriDate: {
    marginTop: 5,
    fontSize: 16,
    color: '#0E7C66',
  },
});
