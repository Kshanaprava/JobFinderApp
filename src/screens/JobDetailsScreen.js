import React from 'react';
import { View, Text, Button } from 'react-native';
import { useBookmark } from '../context/BookmarkContext';

export default function JobDetailsScreen({ route }) {
  const { job } = route.params;
  const { addBookmark } = useBookmark();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{job.title}</Text>
      <Text>{job.description}</Text>
      <Button title="Bookmark" onPress={() => addBookmark(job)} />
    </View>
  );
}
