import React, { useContext } from "react";
import { TextInput, Text, View } from "react-native";
import { AuthContext } from "../../../context/auth/AuthContext";
import styles from "../styles";
import * as Yup from "yup";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("*Invalid email").required("*Email is required"),
  password: Yup.string()
    .min(4, "*Too Short!")
    .max(15, "*Too Long!")
    .required("*Password is required"),
});

const Register = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { authAction } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text>background title</Text>
      </View>
      <View style={styles.authContainer}>
        <Text style={styles.textTitle}>Welocome to the App</Text>

        <View>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <>
                <TextInput
                  placeholder="Enter your e-mail"
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.textError}>{errors.email}</Text>
                )}

                <TextInput
                  placeholder="Enter your password"
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                {touched.password && errors.password && (
                  <Text style={styles.textError}>{errors.password}</Text>
                )}

                <TextInput
                  placeholder="Confirm your password"
                  style={styles.input}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={true}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.textError}>{errors.confirmPassword}</Text>
                )}
                <TouchableOpacity
                  style={styles.buttonSubmit}
                  onPress={() => handleSubmit()}
                >
                  <Text> Sign In </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default Register;
