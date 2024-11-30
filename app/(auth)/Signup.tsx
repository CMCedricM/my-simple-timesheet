import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "../../lib/supabase";
import { Button, Input } from "@rneui/themed";
import { useRouter } from "expo-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function signInWithEmail() {
    setLoading(true);
    console.log(password);
    console.log(email);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          firstName: firstName,
          lastName: lastName,
        },
      },
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          style={styles.inputFormat}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
          style={styles.inputFormat}
        />
        <Input
          label="FirstName"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          secureTextEntry={false}
          placeholder="FirstName"
          autoCapitalize={"none"}
          style={styles.inputFormat}
        />
        <Input
          label="LastName"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          secureTextEntry={false}
          placeholder="LastName"
          autoCapitalize={"none"}
          style={styles.inputFormat}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>
      <View>
        <Button
          title={"Already have an account? Sign in here"}
          onPress={() => router.push("/Login")}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  inputFormat: {
    textAlign: "left",
    color: "white",
  },
});

export default Signup;
