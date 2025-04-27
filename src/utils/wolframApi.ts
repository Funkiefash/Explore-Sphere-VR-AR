
import { WolframResult } from '../types';

const WOLFRAM_APP_ID = 'Q78P2Y-GVPK84AKXH';

export async function queryWolfram(query: string): Promise<WolframResult> {
  try {
    const response = await fetch(`https://api.wolframalpha.com/v2/query?appid=${WOLFRAM_APP_ID}&input=${encodeURIComponent(query)}&format=plaintext&output=JSON`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    // Parse the Wolfram Alpha response
    if (data.queryresult && data.queryresult.success) {
      const pods = data.queryresult.pods;
      const primaryPod = pods.find((pod: any) => pod.primary === true || pod.title === 'Result');
      
      return {
        success: true,
        data: {
          plaintext: primaryPod ? primaryPod.subpods[0].plaintext : 'No detailed information available.',
        }
      };
    } else {
      return {
        success: false,
        error: 'No results found for the query.'
      };
    }
  } catch (error) {
    console.error('Error querying Wolfram Alpha:', error);
    return {
      success: false,
      error: 'Failed to query Wolfram Alpha. Please try again.'
    };
  }
}
