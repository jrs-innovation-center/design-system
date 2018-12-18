// theme for mdx-docs components
import { theme } from 'trhc-design-system'

const { space, colors, fontSizes, fontWeights } = theme

const { secondary, lightGray, borderGray } = colors

const monospace = '"Roboto Mono", Menlo, monospace'

export default {
  font: 'Roboto, sans-serif',
  lineHeight: 1.6,
  code: {
    fontFamily: monospace,
    fontSize: '14px',
    color: secondary
  },
  pre: {
    fontFamily: monospace,
    fontSize: '14px',
    padding: '16px',
    color: secondary,
    backgroundColor: lightGray,
    borderRadius: '2px'
  },
  LayoutSidebar: {
    backgroundColor: lightGray
  },
  LayoutContainer: {
    paddingBottom: '128px'
  },

  MenuButton: {
    padding: '8px',
    color: secondary
  },

  LiveCode: {
    border: `1px solid ${lightGray}`,
    borderRadius: '2px',
    marginBottom: '32px'
  },
  LivePreview: {
    padding: '16px'
  },
  LiveEditor: {
    fontFamily: monospace,
    fontSize: '14px',
    padding: '16px',
    overflowX: 'auto',
    color: secondary,
    backgroundColor: lightGray
  },

  PaginationLink: {
    color: secondary,
    fontSize: fontSizes[3] + 'px'
  }
}
