import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'a, a:hover': {
    color: '#000',
    textDecoration: 'none',
  },
});
moragaTheme.baseFontSize = '20px';
moragaTheme.scaleRatio = 2;

const typography = new Typography(moragaTheme);

/*
({
  title: 'Sofis Font Style',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.6,
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  scaleRatio: 2.5,
  headerWeight: 200,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['200'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
});
*/

export default typography;
