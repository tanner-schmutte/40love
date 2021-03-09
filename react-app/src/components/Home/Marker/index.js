import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useLayer, Arrow } from 'react-laag';

const StyledMarker = styled.div`
    background-color: #21b786;
    color: black;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 3px solid black;
    cursor: pointer;
`;

const InfoBox = styled.div`
    padding: 1em;
    border-radius: 50%;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
    border: 3px solid black;
    background-color: #21b786;
    font-family: 'Optima';
    font-weight: bold;
`;

export default function Marker({ id, name }) {
    const history = useHistory();
    const [isOpen, setOpen] = useState(false);
    const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
        isOpen,
        triggerOffset: 10,
        auto: true,
        overflowContainer: false,
        onOutsideClick: () => setOpen(false),
        // container: 'infoboxlayer',
    });
    return (
        <>
            <StyledMarker
                {...triggerProps}
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => {
                    console.log('clicked');
                    history.push(`/courts/${id}`);
                }}
            />
            {isOpen &&
                renderLayer(
                    <InfoBox {...layerProps}>
                        {name}
                        <Arrow
                            {...arrowProps}
                            borderWidth={2.5}
                            borderColor="black"
                            backgroundColor="#21B786"
                        />
                    </InfoBox>
                )}
        </>
    );
}
