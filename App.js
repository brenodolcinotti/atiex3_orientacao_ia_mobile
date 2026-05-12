import React from 'react';
import { SectionList, Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dados estruturados extraídos do documento
const relatorioIA = [
  {
    title: "1. O Cenário Atual em São Carlos",
    data: [
      { id: '1', titulo: 'Adoção Consolidada', descricao: '64,4% das escolas já utilizam ferramentas de IA[cite: 3, 35].' },
      { id: '2', titulo: 'Público-alvo', descricao: 'O foco principal está no Ensino Técnico (51,1%) e Médio (46,7%)[cite: 4, 36].' }
    ]
  },
  {
    title: "2. Principais Aplicações",
    data: [
      { id: '3', titulo: 'Personalização do Ensino', descricao: 'A aplicação mais comum (46,7%), usando plataformas adaptativas[cite: 7].' },
      { id: '4', titulo: 'Eficiência Administrativa', descricao: 'Automatização de tarefas repetitivas, como correção de provas[cite: 40].' }
    ]
  },
  {
    title: "3. Desafios e Barreiras",
    data: [
      { id: '5', titulo: 'Falta de Treinamento', descricao: '64% dos entrevistados apontam a necessidade urgente de capacitação[cite: 44].' },
      { id: '6', titulo: 'Infraestrutura', descricao: 'Problemas de conectividade e equipamentos afetam 35,6% das instituições[cite: 20].' }
    ]
  },
  {
    title: "4. Guia Prático",
    data: [
      { id: '7', titulo: 'Priorizar Letramento', descricao: 'Antes de usar a ferramenta, é preciso entender como ela funciona[cite: 47].' },
      { id: '8', titulo: 'Foco na Ética', descricao: 'Discutir abertamente com os alunos sobre plágio e veracidade das informações[cite: 50].' }
    ]
  }
];

export default function App() {
  
  // Renderiza cada item da lista (Os Cards)
  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <Text style={styles.cardTitle}>{item.titulo}</Text>
      <Text style={styles.cardDesc}>{item.descricao}</Text>
    </TouchableOpacity>
  );

  // Renderiza o título de cada categoria
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      
      {/* Hero Section Mobile */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>IA nas Escolas</Text>
        <Text style={styles.heroSub}>Guia de Orientação - São Carlos</Text>
      </View>

      <SectionList
        sections={relatorioIA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f6',
  },
  hero: {
    backgroundColor: '#2c3e50',
    padding: 30,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#3498db',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  heroSub: {
    color: '#bdc3c7',
    fontSize: 16,
    marginTop: 5,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  headerContainer: {
    backgroundColor: '#f4f7f6',
    paddingVertical: 10,
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
    paddingBottom: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
    // Sombras para iOS e Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});