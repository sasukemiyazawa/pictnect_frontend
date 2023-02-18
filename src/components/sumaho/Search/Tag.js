import { Grid, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

import { useEffect } from "react"
const Tag = ({ data }) => {
    useEffect(() => {
        // console.log(data)
    }, [])
    //FIXME: ４字以上だとバグります。
    return (
        <Grid item xs={3}> 

            <Button variant="text" color="info" sx={{ padding: "0px", border: 2, borderRadius: '1rem', borderColor: 'secondary.main', width: '100%'}} component={Link} to={`/sumaho/results/${data.id}`}>
                <Typography sx={{ fontFamily: 'Zen Kaku Gothic New', fontWeight: 'bold' }}>{data.tagname.substring(0,3)}</Typography>
            </Button>

        </Grid>
    )
}
export default Tag
