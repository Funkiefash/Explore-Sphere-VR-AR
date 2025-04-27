
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { queryWolfram } from '@/utils/wolframApi';
import { InfoPoint, WolframResult } from '@/types';
import { Card } from '@/components/ui/card';

interface InformationPanelProps {
  infoPoint: InfoPoint | null;
  onClose: () => void;
}

const InformationPanel: React.FC<InformationPanelProps> = ({ infoPoint, onClose }) => {
  const [result, setResult] = useState<WolframResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (infoPoint) {
      setLoading(true);
      queryWolfram(infoPoint.query)
        .then((data) => {
          setResult(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setResult(null);
    }
  }, [infoPoint]);

  if (!infoPoint) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 lg:w-1/2 max-h-[60vh] z-50 animate-fade-in">
      <Card className="info-panel p-4 rounded-lg overflow-y-auto">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{infoPoint.title}</h3>
          <Button variant="ghost" onClick={onClose} className="text-white p-1 h-auto">✕</Button>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4 mt-2">
            {result?.success ? (
              <>
                <p className="text-white/90">{result.data?.plaintext}</p>
                {result.data?.image && (
                  <div className="flex justify-center">
                    <img 
                      src={result.data.image} 
                      alt="Wolfram Result" 
                      className="max-w-full h-auto rounded-md"
                    />
                  </div>
                )}
                <div className="flex justify-between items-center pt-2 text-xs text-white/60">
                  <span>Powered by Wolfram Alpha</span>
                  <span>Click anywhere in the scene to explore more</span>
                </div>
              </>
            ) : (
              <div className="text-red-400 py-4">
                <p>Error retrieving information. Please try again.</p>
                <p className="text-xs mt-2">{result?.error}</p>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default InformationPanel;
