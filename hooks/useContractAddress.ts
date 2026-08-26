import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useContractAddress() {
  const [contractAddress, setContractAddress] = useState<string>('Loading...');
  const [buyLink, setBuyLink] = useState<string>('');

  useEffect(() => {
    async function fetchAddress() {
      try {
        const docRef = doc(db, 'info', 'BGNX5fsAVSHhTA7WsPZr');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.ContractAddress) {
            setContractAddress(data.ContractAddress);
          } else {
            setContractAddress('Address not found');
          }
          if (data.buylink) {
            let url = data.buylink;
            if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
              url = 'https://' + url;
            }
            setBuyLink(url);
          }
        } else {
          setContractAddress('Document not found');
        }
      } catch (error) {
        console.error("Error fetching contract address:", error);
        setContractAddress('Error loading address');
      }
    }

    fetchAddress();
  }, []);

  return { contractAddress, buyLink };
}
