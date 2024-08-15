import React from 'react';
import { View, FlatList, Text } from 'react-native';
import JobCard from '../components/JobCard';
import { useBookmark } from '../context/BookmarkContext';

export default function BookmarksScreen({ navigation }) {
  const { bookmarkedJobs } = useBookmark();

  const renderItem = ({ item }) => (
    <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { job: item })} />
  );

  return (
    <View>
      {bookmarkedJobs.length === 0 ? (
        <Text>No bookmarks yet</Text>
      ) : (
        <FlatList
          data={bookmarkedJobs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
