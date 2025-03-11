import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const inter = Inter({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "LearnUp",
  description: "A platform to learn anything - structured and free.",
};

export default function RootLayout({ children }) {
  

  const footer = (
    <footer className = {'p-4 sm:p-8 grid place-items-center'}> 
      <p>Made with ❤️ @ <a className="textGradient" href=" https://github.com/itmesneha/learnup">LearnUp</a></p>
      {/* className = {'text-indigo-600 ' + fugaz.className} */}
    </footer>
  )

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <html lang="en">
      <body> 
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>
      </Box>
        <Sidebar />
        <div className = {'flex flex-col flex-1 p-4 sm:p-8'}>
        {children}
        {footer}
        </div>
      </body>
    </html>
  );
}
