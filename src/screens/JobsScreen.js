import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import JobCard from '../components/JobCard';

export default function JobsScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=1?page=${page}`);
      setJobs([...jobs, ...response.data]);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const loadMoreJobs = () => {
    setPage(page + 1);
  };

  const renderItem = ({ item }) => (
    <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { job: item })} />
  );

  return (
    <View>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error loading jobs...</Text>}
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreJobs}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
