import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Placeholder, PlaceholderLine } from 'rn-placeholder';
import PlaceholderAnimation from './PlaceholderAnimation';
import { AppContext } from '../../context';

const PostCardPlaceholder = () => {
  const { theme } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Placeholder Animation={PlaceholderAnimation}>
        {new Array(4)
          .fill({})
          .map((_, index) =>
            <PlaceholderLine
              noMargin
              color={theme.placeholder}
              key={index}
              height={340}
              style={styles.card}
            />
          )}
      </Placeholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    paddingHorizontal: 20
  },
  card: {
    marginTop: 20,
    borderRadius: 10
  }
});

export default PostCardPlaceholder;