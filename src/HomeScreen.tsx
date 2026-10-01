import { View, Text, StyleSheet, ScrollView, ViewStyle } from 'react-native'

export function HomeScreen() {
    const aulas = [
        {
            id: '1',
            nome: 'Cotidiano',
            ingles: 'Everyday life',
            nivel: 'Fácil',
            cor: '#DCD2F5',
        },
        {
            id: '2',
            nome: 'Viagens',
            ingles: 'Travel',
            nivel: 'Médio',
            cor: '#FADDD5',
        },
        {
            id: '3',
            nome: 'Negócios',
            ingles: 'Business',
            nivel: 'Difícil',
            cor: '#D7EFE7',
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.cabecaTexto}>

                    <View >
                        <Text style={{ color: '#DCCCFB', fontSize: 12 }}>
                            Olá, Nádia!
                        </Text>
                        <Text style={styles.titulo}>
                            Vamos praticar hoje?
                        </Text>
                        <View style={styles.perfil}></View>
                        <View style={styles.busca}>
                            <Text style={{ color: '#999999', fontSize: 13 }}>
                                Buscar aula
                            </Text>
                        </View>

                    </View>
                </View>
                <View style={styles.categorias}>{['Vocabs',
                    'Regras',
                    'Escuta',
                    'Escrita',
                    'Leitura'].map((categoria) =>
                        <View key={categoria}
                            style={{ flex: 1, alignItems: 'center' }}>
                            <View style={styles.circulo} />
                            <Text style={styles.categoriaTexto}>
                                {categoria}
                            </Text>

                        </View>)}

                </View>
                <View style={styles.aulaTitulo}>
                    <Text style={{
                        fontSize: 16,
                        color: '#413753',
                        fontWeight: '600'
                    }}>
                        Aulas de hoje
                    </Text>
                    <Text style={{ fontSize: 12, color: '#E94E7A' }}>
                        Ver todas
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 12, gap: 10 }}>
                    {aulas.map((aula) => (
                        <View key={aula.id} style={styles.card}>
                            <View
                                style={[
                                    styles.iconeAula,
                                    { backgroundColor: aula.cor },
                                ]}
                            />

                            <View style={{ flex: 1, marginLeft: 10, gap: 3 }}>
                                <Text style={{ fontSize: 12, color: '#443B55' }}>
                                    {aula.nome}
                                </Text>

                                <Text style={{ fontStyle: 'italic', fontSize: 10, color: '#91899D' }}>
                                    {aula.ingles}
                                </Text>

                                <Text style={styles.nivel}>
                                    {aula.nivel}
                                </Text>
                            </View>

                            <View style={styles.botaoIniciar}>
                                <Text style={styles.textoBotao}>
                                    Iniciar
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>


            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEAF8'
    },
    cabecaTexto: {
        backgroundColor: '#693CC7',
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 60,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28
    },
    hora: {
        color: 'white',
        fontSize: 12,
        marginBottom: 18
    },
    inicio: {
        marginBottom: 24,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    titulo: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
    perfil: {
        borderRadius: 20,
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderWidth: 2,
        backgroundColor: '#F5C9D8',
        borderColor: 'white'
    },
    busca: {
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 42
    },
    categorias: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 18
    },
    circulo: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderColor: '#F45A83',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    categoriaTexto: {
        fontSize: 9,
        color: '#716A87',
        textAlign: 'center',
        marginTop: 5
    },
    aulaTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 12,
        gap: 22,
        justifyContent: 'space-between'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#D8C8F2',
        minHeight: 82,
    },

    iconeAula: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#DCD2F5',
    },

    nivel: {
        alignSelf: 'flex-start',
        backgroundColor: '#FFE1A8',
        color: '#80571C',
        fontSize: 9,
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 3,
    },

    botaoIniciar: {
        backgroundColor: '#F6537B',
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 20,
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '600',
    },

})