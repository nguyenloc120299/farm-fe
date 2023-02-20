import Dirt from 'components/objects/Dirt'
import Field from 'components/objects/Field'
import Grass from 'components/objects/Grass'
import Tiles from 'components/objects/Tiles'
import React from 'react'

const Land = () => {
    return (
        <>
            <Grass column={2} row={4} >
                <Field />
            </Grass>
            <Grass column={2} row={5} >
                <Field />
            </Grass>
            <Grass column={2} row={6} />
            <Grass column={2} row={7} />


            <Grass column={3} row={4} >
                <Field />
            </Grass>
            <Grass column={3} row={5} >
                <Field />
            </Grass>
            <Grass column={3} row={6} />
            <Grass column={3} row={7} />


            <Grass column={4} row={4} >
                <Field />
            </Grass>
            <Grass column={4} row={5} >
                <Field />
            </Grass>
            <Grass column={4} row={6} />
            <Grass column={4} row={7} />



            <Grass column={5} row={4} />
            <Grass column={5} row={5} />
            <Grass column={5} row={6} />
            <Grass column={5} row={7} />



            <Grass column={6} row={4} />
            <Grass column={6} row={5} />
            <Grass column={6} row={6} />
            <Grass column={6} row={7} />



            <Grass column={7} row={4} />
            <Grass column={7} row={5} />
            <Grass column={7} row={6} />
            <Grass column={7} row={7} />


            <Grass column={8} row={4} />
            <Grass column={8} row={5} />
            <Grass column={8} row={6} />
            <Grass column={8} row={7} />


            <Tiles />
        </>
    )
}

export default Land