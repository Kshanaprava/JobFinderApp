import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function JobCard({ job, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10, marginVertical: 5, backgroundColor: '#f8f8f8', borderRadius: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{job.title}</Text>
        <Text>{job.location}</Text>
        <Text>{job.salary}</Text>
        <Text>{job.phone}</Text>
      </View>
    </TouchableOpacity>
  );
}
