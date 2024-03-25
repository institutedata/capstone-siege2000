import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack, Typography, FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import moment from 'moment';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';





export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        
      ]}
      height={290}
      xAxis={[{ data: ['Jan', 'Feb', 'Mar','Apr'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
