import React, { useEffect, useState } from 'react';
import { Button, Platform, Text } from 'react-native';
import { BasicLayout } from '@ui-components/templates';
import Tts from 'react-native-tts';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import axios from 'axios';
import { ActionButton } from '@shared/components';
const token = '';

async function openAIChatCompletion(text: string) {
  console.log('response', text);
  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: `For the question "what is a react component?", I respond it: "${text}", from 1 to 10, What rate do you give to this response?, use the this structure in your response {"rate":"rate number", message:"why"} `,
      },
    ],
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      data,
      { headers },
    );
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
}

const InterviewScreen: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);
  const [started, setStarted] = useState<boolean>(false);
  const [recording, setRecording] = React.useState({
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    partialResults: [],
  });
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [text, setText] = useState(
    'Hello, I hope you are well. I have some question for you, the first one is:  what is a react component?',
  );
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    setStarted(true);
  };

  const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
    setRecording({ ...recording, recognized: '√' });
  };

  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    setRecording({ ...recording, end: '√' });
    setStarted(false);
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    setRecording({ ...recording, error: JSON.stringify(e.error) });
    setStarted(false);
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e);

    if (e.value != undefined) {
      const rest = [...e.value];
      const last = rest.pop();
      last && setResults([last]);
    }
  };

  const onSpeechPartialResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechPartialResults: ', e);
  };

  const onSpeechVolumeChanged = (e: any) => {
    console.log('onSpeechVolumeChanged: ', e);
    setRecording({ ...recording, pitch: e.value });
  };

  const _startRecognizing = async () => {
    setRecording({
      ...recording,
      recognized: '',
      pitch: '',
      error: '',
      partialResults: [],
      end: '',
    });

    setResults([]);

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    setRecording({
      ...recording,
      recognized: '',
      pitch: '',
      error: '',
      partialResults: [],
      end: '',
    });
  };

  const readText = async () => {
    Tts.stop();
    Tts.speak(text);
  };
  const initTts = async () => {
    const voices = await Tts.voices();
    const id =
      Platform.OS === 'ios'
        ? 'com.apple.voice.compact.en-US.Samantha'
        : 'en-us-x-sfg-local';
    const availableVoices = voices.filter(
      (v) =>
        !v.networkConnectionRequired &&
        !v.notInstalled &&
        v.language.indexOf('en-US') > -1 &&
        v.id === id,
    );
    console.log(availableVoices);
    let selectedVoice = null;
    if (availableVoices && availableVoices.length > 0) {
      selectedVoice = availableVoices[0];
      try {
        await Tts.setDefaultLanguage(selectedVoice.language);
      } catch (err) {
        //Samsung S9 has always this error:
        //"Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      await Tts.setDefaultVoice(selectedVoice.id);
    } else {
    }
  };

  useEffect(() => {
    Tts.addEventListener('tts-start', (_event) => setTtsStatus('started'));
    Tts.addEventListener('tts-finish', (_event) => setTtsStatus('finished'));
    Tts.addEventListener('tts-cancel', (_event) => setTtsStatus('cancelled'));
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.getInitStatus().then(initTts);
    return () => {
      // Tts.removeEventListener('tts-start', (_event) => setTtsStatus('started'));
      // Tts.removeEventListener('tts-finish', (_event) =>
      //   setTtsStatus('finished'),
      // );
      // Tts.removeEventListener('tts-cancel', (_event) =>
      //   setTtsStatus('cancelled'),
      // );
    };
  }, []);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    return () => {
      _destroyRecognizer();
    };
  }, []);

  return (
    <BasicLayout title="Welcome">
      <Text>question:{text}</Text>
      <ActionButton title={'Read quesion'} onPress={readText} type="primary" />
      <Text>results:{results.join(' ')}</Text>
      <ActionButton
        title={started ? 'Stop Recording' : 'Start Recording'}
        onPress={started ? _stopRecognizing : _startRecognizing}
        type="secondary"
      />
      {results.length > 0 && (
        <ActionButton
          title={'send'}
          onPress={async () => await openAIChatCompletion(results[0])}
          type="secondary"
        />
      )}
    </BasicLayout>
  );
};

export { InterviewScreen };
