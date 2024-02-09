import cors from 'nextjs-cors'

import { ALLOWED_ORIGINS } from '../configs/Envs'

const Cors = async (req, res) => {
    const ORIGINS = ALLOWED_ORIGINS.split(',')
    console.error({ ORIGINS }, { ALLOWED_ORIGINS })

    if (ORIGINS.includes('*')) {
        await cors(req, res, {
            methods: '*',
            origin: '*',
            optionsSuccessStatus: 200
        })

        return true
    }

    else {
        console.log({
            host: req.headers['host'],
            origin: req.headers['origin']
        })
        const ORIGIN = req.headers['origin'] || req.headers['host']
        console.error({ ORIGIN })

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