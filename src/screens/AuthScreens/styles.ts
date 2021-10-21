import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  textTitle: {
    width: "100%",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "teal",
    paddingBottom: 8,
    marginVertical: 20,
  },
  authContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  input: {
    height: 36,
    borderWidth: 2,
    borderColor: "teal",
    color: "black",
    padding: 10,
    margin: 2,
    borderRadius: 7,
    fontSize: 14,
  },
  textError: {
    fontSize: 10,
    color: "#fa5035",
    textTransform: "uppercase",
    paddingHorizontal: 10,
  },
  buttonSubmit: {
    backgroundColor: "teal",
    borderRadius: 10,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 35,
  },
});

export default styles;
