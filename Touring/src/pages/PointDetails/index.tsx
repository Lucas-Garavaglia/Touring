import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import RouterDefinition from "../../RouterDefinition"
import { Feather } from '@expo/vector-icons';


const data = {
  name: "Marco das três fronteiras",
  state: "Aberto - Fecha 18h",
  avaliation: 4,
  key: 5,
  description: "O Parque das Aves é um parque temático localizado na cidade de Foz do Iguaçu, no estado brasileiro do Paraná. Situado próximo às Cataratas do rio Iguaçu, o parque possui 16 hectares de mata nativa, com 1.500 animais entre aves, répteis e mamíferos, ",
  address: "Av. Gen. Meira, s/n - Jardim Eldorado, Foz do Iguaçu - PR, 85853-110",
  phone: "999087584",
  linkImg: "https://www.loumarturismo.com.br/passeios/imagens/00013/1923-show-de-luzes-e-aguas-marco-tres-frontei.jpg"


}
interface PointProps {
  item: {
    key: number,
    linkImg: string,
    avaliation: number,
    state: string,
    name: string,
    description: string,
    address: string,
    phone: string
  }
}

type Props = StackScreenProps<RouterDefinition, 'PointDetails'>;
const PointDetails = ({ route, navigation }: Props) => {

  return (
    <View style={Styles.container}>
      <Image style={Styles.imagem} source={{ uri: route.params.linkImg }} />

      <View style={Styles.containerDetails}>

        <Text style={Styles.title}>
          {route.params.name}
        </Text>
        <Text style={Styles.text}>
          {route.params.rating}
        </Text>
        <Text style={Styles.description}>
          {route.params.description}
        </Text>
        <View style={Styles.additionalContainer}>
          <Text style={Styles.additional}>
            {route.params.adress}
          </Text>
          <Text style={Styles.additional}>
            Telefone: {data.phone}
          </Text>
          <Text style={Styles.additional}>
            {route.params.state}
          </Text>
        </View>
      </View>


      <TouchableOpacity
      onPress={() => navigation.navigate('PointAttractions', route.params)}
        style={Styles.button}
      >
        <Text style={Styles.textButton}>Atrações</Text>
        <Feather name="arrow-right-circle" color="#fff" size={35} />
      </TouchableOpacity>



    </View>
  );
}

export default PointDetails;
