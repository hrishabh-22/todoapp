import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, Container, Form, Input, Item, H1, Button} from 'native-base';
import shortid from 'shortid';
import {addTodo} from '../action/list';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

const Add = ({navigation, addTodo}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      if (!title || !description) {
        return alert('Add Both Fields');
      }
      const todoToAdd = {
        id: shortid.generate(),
        title: title,
        description: description,
        isDone: false,
      };
      addTodo(todoToAdd);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add To Watch List</H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Add Todo Title"
              value={title}
              onChangeText={text => setTitle(text)}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Add Todo Description"
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </Item>
          <Button rounded block onPress={handleSubmit}>
            <Text>Add</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

const mapDispatchToProps = {
  addTodo: data => addTodo(data),
};

Add.propTypes = {
  addTodo: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Add);

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
