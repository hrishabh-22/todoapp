import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Container, Form, Input, Item, H1, Button} from 'native-base';

const Add = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add To Watch List</H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Add Todo Title"
              value={title}
              onChangeText={() => {}}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Add Todo Description"
              value={description}
              onChangeText={() => {}}
            />
          </Item>
          <Button rounded block onPress={() => {}}>
            <Text>Add</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});
