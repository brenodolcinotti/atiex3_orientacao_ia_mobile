import React, { useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  Platform
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

export default function App() {

  const scrollViewRef = useRef();

  const [dadosY, setDadosY] = useState(0);
  const [guiaY, setGuiaY] = useState(0);

  const dicas = [
    "Priorizar o Letramento Digital: Antes de usar a ferramenta, é preciso entender como ela funciona.",
    "IA como Assistente, não Substituto: A IA deve apoiar o professor, permitindo que foque na mediação.",
    "Foco na Ética: Discutir abertamente sobre plágio, veracidade e uso crítico das respostas.",
    "Adaptação de Infraestrutura: Investir em conectividade para reduzir a barreira técnica (35,6%).",
    "Desenvolvimento Crítico: Potencializar o ser humano sem comprometer o pensamento crítico."
  ];

  const [dicaExibida, setDicaExibida] = useState(
    "Clique para ver uma recomendação da cartilha."
  );

  const gerarDica = () => {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    setDicaExibida(dicas[indiceAleatorio]);
  };

  return (
    <View style={styles.body}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.nav}>

          <TouchableOpacity
            onPress={() =>
              scrollViewRef.current?.scrollTo({
                y: 0,
                animated: true
              })
            }
          >
            <Text style={styles.logoText}>EducaIA - São Carlos</Text>
          </TouchableOpacity>

          <View style={styles.navUl}>

            <TouchableOpacity
              onPress={() =>
                scrollViewRef.current?.scrollTo({
                  y: dadosY,
                  animated: true
                })
              }
            >
              <Text style={styles.navLiA}>Dados</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                scrollViewRef.current?.scrollTo({
                  y: guiaY,
                  animated: true
                })
              }
            >
              <Text style={styles.navLiA}>Guia</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* HERO */}
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80'
          }}
          style={styles.heroBackground}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>
              Inovação Tecnológica e Equilíbrio Educacional
            </Text>

            <Text style={styles.heroSubtitle}>
              Mais de 64% das escolas da região já integram algum tipo de IA em seus processos.
            </Text>
          </View>
        </ImageBackground>

        {/* DADOS */}
        <View
          style={styles.container}
          onLayout={(event) => {
            setDadosY(event.nativeEvent.layout.y);
          }}
        >

          <Text style={styles.sectionTitle}>
            Cenário Atual em São Carlos
          </Text>

          <Text style={styles.paragraph}>
            A adoção da IA é uma realidade consolidada,
            focada majoritariamente no Ensino Técnico/Profissionalizante
            (51,1%) e Ensino Médio (46,7%).
          </Text>

          <View style={styles.statsBox}>

            <View style={styles.statItem}>
              <Text style={styles.statNumber}>7.24%</Text>

              <Text style={styles.statLabel}>
                Importância para o futuro profissional
              </Text>
            </View>

            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5.29%</Text>

              <Text style={styles.statLabel}>
                Percepção de uso "saudável"
              </Text>
            </View>

          </View>
        </View>

        {/* IMPACTOS */}
        <View style={[styles.container, styles.bgGray]}>

          <Text style={styles.sectionTitle}>
            Impactos Percebidos
          </Text>

          <Text style={styles.paragraph}>
            A IA é vista como excelente para a gestão,
            mas gera dúvidas sobre o aprendizado direto.
          </Text>

          <View style={styles.impactGrid}>

            <View style={[styles.impactCard, styles.positivo]}>
              <Text style={styles.impactTitle}>
                Carga de Trabalho
              </Text>

              <Text style={styles.impactDesc}>
                Impacto positivo ao reduzir tarefas repetitivas dos professores.
              </Text>
            </View>

            <View style={[styles.impactCard, styles.negativo]}>
              <Text style={styles.impactTitle}>
                Engajamento
              </Text>

              <Text style={styles.impactDesc}>
                Impacto negativo; a tecnologia isolada não garante o interesse do aluno.
              </Text>
            </View>

          </View>
        </View>

        {/* BARREIRAS */}
        <View style={styles.container}>

          <Text style={styles.sectionTitle}>
            Barreiras Críticas
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Falta de Treinamento (64,4%)
            </Text>

            <Text style={styles.cardText}>
              O maior desafio identificado. Professores sentem
              que não dominam as ferramentas.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Resistência e Infraestrutura
            </Text>

            <Text style={styles.cardText}>
              42,2% relatam resistência humana e
              35,6% apontam problemas com internet
              e equipamentos.
            </Text>
          </View>

        </View>

        {/* GUIA */}
        <View
          style={styles.guiaSection}
          onLayout={(event) => {
            setGuiaY(event.nativeEvent.layout.y);
          }}
        >

          <Text style={styles.sectionTitle}>
            Cartilha de Orientação
          </Text>

          <View style={styles.dicaBox}>
            <Text style={styles.dicaText}>
              {dicaExibida}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={gerarDica}
          >
            <Text style={styles.buttonText}>
              Ver Recomendação
            </Text>
          </TouchableOpacity>

        </View>

        {/* FOOTER */}
        <View style={styles.footer}>

          <Text style={styles.footerReflexao}>
            A IA em São Carlos está numa fase de
            "transição operacional".
            O caminho é potencializar o humano sem
            comprometer o pensamento crítico.
          </Text>

          <Text style={styles.footerInfo}>
            Dados coletados em:
            Colégio La Salle, SESI 407,
            E.E. Álvaro Guião, entre outras.
          </Text>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f4f7f6',
  },

  header: {
  backgroundColor: '#2c3e50',

  paddingTop:
    Platform.OS === 'android'
      ? StatusBar.currentHeight + 20
      : 60,

  paddingBottom: 25,
  paddingHorizontal: 25,

  zIndex: 1000,
  elevation: 8,
},

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoText: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},

  navUl: {
    flexDirection: 'row',
  },

  navLiA: {
  color: 'white',
  marginLeft: 20,
  fontSize: 16,
},

  scrollContent: {},

  heroBackground: {
    height: height * 0.4,
    width: '100%',
  },

  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    padding: 25,
  },

  heroTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  heroSubtitle: {
    color: '#bdc3c7',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },

  container: {
    padding: 20,
  },

  bgGray: {
    backgroundColor: '#ecf0f1',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 5,
    alignSelf: 'center',
  },

  paragraph: {
    fontSize: 15,
    color: '#34495e',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 15,
  },

  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  statItem: {
    alignItems: 'center',
    width: '45%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },

  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },

  statLabel: {
    fontSize: 11,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 5,
  },

  impactGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  impactCard: {
    width: '48%',
    padding: 15,
    borderRadius: 8,
  },

  positivo: {
    backgroundColor: '#2ecc71'
  },

  negativo: {
    backgroundColor: '#e74c3c'
  },

  impactTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5
  },

  impactDesc: {
    color: 'white',
    fontSize: 12
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5
  },

  cardText: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20
  },

  guiaSection: {
    padding: 30,
    alignItems: 'center',
  },

  dicaBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    minHeight: 100,
    justifyContent: 'center',
    width: '100%',
    elevation: 2,
  },

  dicaText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#2c3e50',
    fontSize: 15
  },

  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  footer: {
    padding: 20,
    backgroundColor: '#2c3e50',
  },

  footerReflexao: {
    color: '#bdc3c7',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 15
  },

  footerInfo: {
    color: '#7f8c8d',
    fontSize: 10,
    textAlign: 'center'
  }
});