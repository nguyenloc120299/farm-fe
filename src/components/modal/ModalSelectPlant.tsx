import { Modal } from 'antd'
import { ACTIONS } from 'context/Actions'
import { DataContext } from 'context/GlobalContext'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

const ModalStyled = styled(Modal)`

`
const ModalSelectPlant = () => {
    const state = useContext(DataContext)?.state
    const dispatch = useContext(DataContext)?.dispatch


    return (
        <ModalStyled title="Basic Modal"
            open={state.modal.modalSelectPlant}
            onCancel={() => {
                dispatch && dispatch({
                    type: ACTIONS.TOOGLE_MODAL_SELECTPLANT
                })
            }}
            footer={null}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </ModalStyled>
    )
}

export default ModalSelectPlant