import React, { ReactElement, FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import Singleton from "../scripts/singleton";
import { useState } from "react";




const Home: FC<any> = (): ReactElement => {

    const [count, setCount] = useState(Singleton.get().getVisitCount());

    const increment = () => {
        Singleton.get().visitPage();

        setCount(Singleton.get().getVisitCount());
    }

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">Home</Typography>
            <Button onClick={increment}>Visit page</Button>
            <Typography variant="h3">{count}</Typography>
           
        </Box>
    );
};

export default Home;