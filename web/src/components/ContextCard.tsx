import React from 'react'
import { Card, CardContent, Typography, Avatar, Button, Tooltip } from '@mui/material'
import { ContextData } from './types/ChatTypes'

export default function ContextCard({ ctx }: { ctx: ContextData | null }) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardContent>
        <div className="flex items-start gap-3">
          <Avatar className="bg-gradient-to-r from-purple-500 to-indigo-500">A</Avatar>
          <div>
            <Typography variant="h6" className="font-semibold">
              {ctx?.title || 'No context selected'}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              {ctx?.author || 'Unknown author'} — {ctx?.date || 'Unknown date'}
            </Typography>
          </div>
        </div>

        <div className="mt-4">
          <Typography variant="body2" className="text-gray-700">
            {ctx?.summary || 'Select a message in the chat to see related article/context information.'}
          </Typography>
        </div>

        {ctx?.keyPoints && ctx.keyPoints.length > 0 ? (
          <div className="mt-3">
            <Typography variant="subtitle2" className="text-gray-600 mb-1">
              Key points
            </Typography>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {ctx.keyPoints.map((k, i) => (
                <li key={i}>{k}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {ctx?.links && ctx.links.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {ctx.links.map((l, i) => (
              <Tooltip key={i} title={l}>
                <Button
                  size="small"
                  variant="outlined"
                  className="text-xs"
                  onClick={() => window.open(l, '_blank')}
                >
                  Open source
                </Button>
              </Tooltip>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
