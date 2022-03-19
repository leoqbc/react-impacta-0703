import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

const PerfilCard = ({ login, avatar_url, contributions }) => {
    return (
        <Card style={style.card}>
            <Card.Cover source={{ uri: avatar_url }} />
            <Card.Content>
                <Title>{login}</Title>
                <Paragraph>Contribuições: {contributions}</Paragraph>
            </Card.Content>
        </Card>
    );
};

const style = StyleSheet.create({
    card: {
        marginTop: 30
    }
});

export default PerfilCard;