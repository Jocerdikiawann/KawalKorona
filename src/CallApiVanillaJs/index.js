import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CallApiVanillaJs = () => {
  //call Api method GET
  const [dataUser, setDataUser] = useState({
    name: '',
    positif: '',
    sembuh: '',
    meninggal: '',
    dirawat: '',
  });
  useEffect(() => {
    // fetch('https://api.kawalcorona.com/indonesia/')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }, []);

  const getData = () => {
    fetch('https://api.kawalcorona.com/indonesia/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json[0]);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.content}>TestingApi</Text>
      <Button style={styles.buttonnih} title="GET DATA" onPress={getData} />
      <Text>RESPONSE DATA : </Text>
      <Text>Negara : {dataUser.name}</Text>
      <Text>Jumlah Positif : {dataUser.positif}</Text>
      <Text>Jumlah Dirawat : {dataUser.dirawat}</Text>
      <Text>Jumlah Meninggal : {dataUser.meninggal}</Text>
      <Text>Jumlah Sembuh : {dataUser.sembuh}</Text>
    </View>
  );
};

export default CallApiVanillaJs;

const styles = StyleSheet.create({
  container: {padding: 20},
  content: {textAlign: 'center'},
});
