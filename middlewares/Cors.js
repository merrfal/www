import cors from 'nextjs-cors'

import { NextApiRequest, NextApiResponse } from 'next'
import { ALLOWED_ORIGINS } from '@/data'
import { TranslationKeys } from '@/ts'

const Cors = async (req, res, errors) => {
    const ORIGINS = ALLOWED_ORIGINS.split(',')

    if (ORIGINS.includes('*')) await cors(req, res, {
        methods: '*',
        origin: '*',
        optionsSuccessStatus: 200
    })

    else {
        const ORIGIN = req.headers['origin'] || req.headers['host']

        if (ORIGINS.includes(ORIGIN)) await cors(req, res, {
            methods: '*',
            origin: ORIGIN,
            optionsSuccessStatus: 200
        })
    
        else errors.push('origin-request-is-not-allowed')
    }
}

export default Cors