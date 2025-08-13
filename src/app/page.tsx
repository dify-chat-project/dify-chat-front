'use client'

import {
  Chat as ChatIcon,
  Code as CodeIcon,
  Build as DockerIcon,
  Palette as PaletteIcon,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const theme = useTheme()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const technologies = [
    {
      name: 'Next.js',
      icon: <CodeIcon />,
      color: theme.palette.primary.main,
      description: 'React フレームワーク',
    },
    {
      name: 'TypeScript',
      icon: <CodeIcon />,
      color: theme.palette.secondary.main,
      description: '型安全な開発',
    },
    {
      name: 'Material-UI',
      icon: <PaletteIcon />,
      color: theme.palette.success.main,
      description: 'モダンなUIライブラリ',
    },
    {
      name: 'Docker',
      icon: <DockerIcon />,
      color: theme.palette.info.main,
      description: 'コンテナ化',
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          textAlign: 'center',
          mb: 8,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 3,
          }}
        >
          Dify Chat Front
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          Next.js + TypeScript + Material-UI
        </Typography>

        <Typography variant="body1" color="text.secondary">
          モダンなチャットアプリケーションのフロントエンド
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
          <Chip label="React 19" color="primary" variant="outlined" />
          <Chip label="Next.js 15" color="primary" variant="outlined" />
          <Chip label="MUI v7" color="secondary" variant="outlined" />
          <Chip label="TypeScript" color="info" variant="outlined" />
        </Stack>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {technologies.map((tech, index) => (
          <Grid item xs={12} sm={6} md={3} key={tech.name}>
            <Card
              elevation={hoveredCard === index ? 8 : 2}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
                cursor: 'pointer',
              }}
            >
              <CardContent
                sx={{
                  textAlign: 'center',
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    color: tech.color,
                    mb: 2,
                    '& svg': {
                      fontSize: 48,
                    },
                  }}
                >
                  {tech.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {tech.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tech.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
        }}
      >
        <ChatIcon
          sx={{
            fontSize: 64,
            color: theme.palette.primary.main,
            mb: 3,
          }}
        />

        <Typography variant="h4" gutterBottom>
          🚀 セットアップ完了！
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          MUIベースのクリーンなフロントエンド環境が整いました。
          <br />
          Docker環境と連携して、本格的なチャットアプリケーションの開発を始めましょう！
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<ChatIcon />}
          component={Link}
          href="/chat"
          sx={{
            px: 4,
            py: 2,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem',
          }}
        >
          チャットを開始する
        </Button>
      </Paper>
    </Container>
  )
}
