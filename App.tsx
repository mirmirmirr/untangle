/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  // useColorScheme,
  View,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

import { config } from '@gluestack-ui/config';
import {
  Button,
  ButtonText,
  GluestackUIProvider,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import AppleMusicUserToken from 'react-native-apple-music-user-token';
import type { ApiConfig } from 'react-native-spotify-remote';
import {
  auth as SpotifyAuth,
  remote as SpotifyRemote,
  ApiScope
} from 'react-native-spotify-remote';

// import { api } from './src/requests';

const spotifyConfig: ApiConfig = {
  clientID: '65e413bf96324a859b8246235fd2d998',
  redirectURL: 'untangle://',
  tokenRefreshURL:
    'https://api-prod.discoverrealmusic.com/spotify/token/refresh',
  tokenSwapURL: 'https://api-prod.discoverrealmusic.com/spotify/token/swap',
  scopes: [
    ApiScope.AppRemoteControlScope,
    ApiScope.UserReadRecentlyPlayedScope,
    ApiScope.UserReadCurrentlyPlaying,
    ApiScope.UserFollowReadScope,
    ApiScope.PlaylistModifyPublicScope,
  ],
};


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleSpotify = async () => {
    const session = await SpotifyAuth.authorize(spotifyConfig);
    console.log(session);
    await SpotifyRemote.connect(session.accessToken);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text> Hello World </Text>

      {/* <GluestackUIProvider config={config}>
        <VStack space="sm">
          <Button
            onPress={handleSpotify}
            size="md"
            variant="solid"
            action="primary"
          >
            <ButtonText>스포티파이</ButtonText>
          </Button>
        </VStack>
      </GluestackUIProvider> */}

      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
