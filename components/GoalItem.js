import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 13,
    margin: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#808080",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: { color: "white", padding: 3, fontSize: 16 },
});
