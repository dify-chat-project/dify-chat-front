'use client'

import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import {
    Box,
    Container,
    IconButton,
    Paper,
    Tooltip,
    Typography,
} from '@mui/material'
import Link from 'next/link'

export default function ChatPage() {
  return (
    <Container maxWidth={false} sx={{ height: '100vh', p: 0 }}>
      <Paper
        elevation={0}
        sx={{
          height: '100%',
          borderRadius: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ヘッダー */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: 'background.paper',
          }}
        >
          <Link href="/" passHref>
            <Tooltip title="ホームに戻る">
              <IconButton
                edge="start"
                sx={{
                  mr: 2,
                  color: 'primary.main',
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
          </Link>

          <Typography
            variant="h6"
            component="h1"
            sx={{
              flexGrow: 1,
              fontWeight: 'medium',
            }}
          >
            Dify チャット
          </Typography>
        </Box>

        {/* iframeコンテナ */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="http://localhost/chatbot/PJTXgBePyxSm9XuV"
            title="Dify Chatbot"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="microphone"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '700px',
              border: 'none',
              display: 'block',
            }}
          />
        </Box>
      </Paper>
    </Container>
  )
}
