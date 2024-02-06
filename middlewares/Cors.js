import cors from 'nextjs-cors'

import { ALLOWED_ORIGINS } from '../configs/Envs'

const Cors = async (req, res) => {
    const ORIGINS = ALLOWED_ORIGINS.split(',')

    console.log(ORIGINS)

    if (ORIGINS.includes('*')) {
        await cors(req, res, {
            methods: '*',
            origin: '*',
            optionsSuccessStatus: 200
        })

        return true
    }

    else {
        const ORIGIN = req.headers['origin'] || req.headers['host']

        if (ORIGINS.includes(ORIGIN)) {
            await cors(req, res, {
                methods: '*',
                origin: ORIGIN,
                optionsSuccessStatus: 200
            })
            
            return true
        }
    
        else return false
    }
}

export default Cors