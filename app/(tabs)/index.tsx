import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { width } = useWindowDimensions();

  const handleSubmit = () => {
    if (!name || !email || !age) {
      alert("Please fill in all fields.");
      return;
    }
    setModalVisible(true);
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setAge("");
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    handleClear(); // Clear inputs after modal closes
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { width: width > 400 ? 380 : "90%" }]}>
        <Text style={styles.heading}>User Information</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={handleClear}
          >
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Saved</Text>
            <Text style={styles.modalText}>
              Your information has been saved:
            </Text>
            <Text style={styles.modalInfo}>Name: {name}</Text>
            <Text style={styles.modalInfo}>Email: {email}</Text>
            <Text style={styles.modalInfo}>Age: {age}</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    padding: 25,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#F0F0F0",
    textAlign: "center",
    marginBottom: 30,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    color: "#CCCCCC",
    marginBottom: 8,
    fontSize: 18,
  },
  input: {
    backgroundColor: "#2C2C2C",
    padding: 15,
    borderRadius: 10,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#444",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 25,
  },
  buttonPrimary: {
    backgroundColor: "#4287f5",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: "#555555",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 17,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#1A1A1A",
    borderRadius: 14,
    padding: 30,
    width: "90%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4287f5",
    marginBottom: 12,
  },
  modalText: {
    color: "#CCCCCC",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 20,
  },
  modalInfo: {
    color: "#AAAAAA",
    fontSize: 16,
    marginBottom: 6,
  },
  modalButton: {
    marginTop: 25,
    backgroundColor: "#4287f5",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
