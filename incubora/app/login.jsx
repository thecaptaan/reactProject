import { Link } from "expo-router";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  matchEmailDomain,
} from "@/functions/validate/loginValidate";

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    if (!matchEmailDomain(data.email)) {
      setError("email", {
        type: "manual",
        message: "Company mail id is required",
      });
    } else {
      console.log(data);
    }
  };

  return (
    <View style={styles.login}>
      <View style={styles.loginItem}>
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
            name="password"
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
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}
        </View>

        <Link href="/forget" style={styles.forgetPassword}>
          <Text style={styles.createAccountLink}>Forget Password</Text>
        </Link>
        <Pressable style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.authOther}>
        <Text style={styles.or}>Or</Text>

        <Text style={styles.createAccount}>
          Don't have an account? &nbsp;
          <Link href="/register">
            <Text style={styles.createAccountLink}>Register</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  loginItem: {
    width: "90%",
    margin: 10,
  },
  forgetPassword: {
    textAlign: "right",
    marginBottom: 10,
    fontSize: 13,
  },
  loginButton: {
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  loginButtonText: {
    color: "white",
  },
  createAccount: {
    textAlign: "center",
  },
  createAccountLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  authOther: {
    marginTop: 10,
    textAlign: "center",
    flexDirection: "column",
    alignContent: "center",
  },
  or: {
    textAlign: "center",
    marginBottom: 10,
  },
});
