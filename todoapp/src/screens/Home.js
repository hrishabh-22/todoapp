import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Text,
  List,
  Left,
  Right,
  CheckBox,
  Button,
  Icon,
  Body,
  ListItem,
  Title,
  H1,
  Fab,
  Container,
  Content,
} from 'native-base';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {removeTodo, markComplete} from '../action/list';

const Home = props => {
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        {props.listState.length === 0 ? (
          <Container style={styles.emptyContainer}>
            <H1 style={styles.heading}>Add Something</H1>
          </Container>
        ) : (
          <Content padder>
            <H1 style={styles.heading}>Next Todo</H1>
            <List>
              {props.listState.map(todo => (
                <ListItem icon key={todo.id} noBorder style={styles.listItem}>
                  <Left>
                    <Button
                      danger
                      style={styles.actionButton}
                      onPress={() => {
                        props.removeTodo(todo.id);
                      }}>
                      <Icon active name="trash" />
                    </Button>
                  </Left>
                  <Body>
                    <Title style={styles.todoName}>{todo.title}</Title>
                    <Text note>{todo.description}</Text>
                  </Body>
                  <Right>
                    <CheckBox
                      checked={todo.isDone}
                      onPress={() => {
                        props.markComplete(todo.id);
                      }}
                    />
                  </Right>
                </ListItem>
              ))}
            </List>
          </Content>
        )}
        <Fab
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={() => props.navigation.navigate('Add')}>
          <Icon name="add" />
        </Fab>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = state => ({
  listState: state.list,
});

const mapDispatchToProps = {
  removeTodo: id => removeTodo(id),
  markComplete: id => markComplete(id),
};

Home.propTypes = {
  removeTodo: propTypes.func.isRequired,
  markComplete: propTypes.func.isRequired,
  listState: propTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  todoName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
