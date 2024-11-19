import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CalendarPicker from "react-native-calendar-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
export default function RegisterScreen() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const toggleCalendar = () => {
    setOpenCalendar(!openCalendar);
  };
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(""),
  });

  return (
    <View style={styles.register}>
      <View style={styles.registerItem}>
        <View style={styles.inputContainer}>
          <Text>First Name</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="eg: hello@example.com"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
        </View>
        {/* <CalendarPicker /> */}
        <View style={styles.inputContainer}>
          <Text>Date of Birth</Text>
          <Pressable onPress={setOpenCalendar}>
            <TextInput
              style={styles.input}
              value={date.toDateString()}
              caretHidden={true}
              editable={false}
            />
          </Pressable>
          {openCalendar && (
            <RNDateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={(event, selectedDate) => {
                setOpenCalendar(false);
                setDate(selectedDate);
              }}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="eg: hello@example.com"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text>Password</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
        </View>
        <View>
          <Pressable style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </Pressable>
          <View style={styles.authOther}>
            <Text style={styles.or}>or</Text>
            <Text>
              Already have an account?{" "}
              <Link href="/login">
                <Text style={styles.loginLink}>Login</Text>
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  registerItem: {
    width: "90%",
  },
  error: {
    color: "red",
    fontSize: 12,
  },
  login: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  registerButton: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    textDecorationLine: "underline",
  },
  registerButtonText: {
    color: "white",
  },
  authOther: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  or: {
    textAlign: "center",
    marginBottom: 10,
  },

  loginLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
