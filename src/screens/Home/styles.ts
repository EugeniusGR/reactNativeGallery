import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    header: {
        padding: 10,
        backgroundColor: '#eef'
    },
    headerText: {
        fontSize: 22
    },
    image: {
        width: 440,
        height: 440,
    },
    imageItem: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        backgroundColor: '#eee'
    },
    list: {
        padding: 10,
    },
    imageItemInfo: {
        padding: 10,
    },
    imageInfoAuthor: {
        color: '#118'
    }
})

export default styles