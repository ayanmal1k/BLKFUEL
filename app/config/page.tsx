'use client'

import React, { useState, useEffect } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { toast } from 'sonner'
import { Save, Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Magnetic } from '@/components/magnetic'

export default function ConfigPage() {
  const [contractAddress, setContractAddress] = useState('')
  const [buyLink, setBuyLink] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, 'info', 'BGNX5fsAVSHhTA7WsPZr')
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data()
          setContractAddress(data.ContractAddress || '')
          setBuyLink(data.buylink || '')
        } else {
          toast.error('Document not found in database')
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        toast.error('Failed to load configuration')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      const docRef = doc(db, 'info', 'BGNX5fsAVSHhTA7WsPZr')
      await updateDoc(docRef, {
        ContractAddress: contractAddress,
        buylink: buyLink
      })
      toast.success('Configuration saved successfully!')
    } catch (error) {
      console.error("Error saving data:", error)
      toast.error('Failed to save configuration')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#9FD401] animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-5 sm:px-8">
      <div className="max-w-2xl mx-auto mt-10">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#9FD401] transition-colors font-frygia">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="font-morton font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#9FD401] mb-8 drop-shadow-[0_0_20px_rgba(159,212,1,0.4)]">
          System Configuration
        </h1>

        <form onSubmit={handleSave} className="space-y-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="space-y-2.5">
            <label htmlFor="contractAddress" className="block font-morton font-bold text-lg sm:text-xl uppercase tracking-wider text-white">
              Contract Address
            </label>
            <input
              id="contractAddress"
              type="text"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              placeholder="e.g. 0x1234...abcd"
              className="w-full bg-black/80 border border-zinc-700/80 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#9FD401] focus:ring-1 focus:ring-[#9FD401] transition-all font-mono text-sm sm:text-base shadow-inner"
            />
          </div>

          <div className="space-y-2.5">
            <label htmlFor="buyLink" className="block font-morton font-bold text-lg sm:text-xl uppercase tracking-wider text-white">
              Buy Link URL
            </label>
            <input
              id="buyLink"
              type="text"
              value={buyLink}
              onChange={(e) => setBuyLink(e.target.value)}
              placeholder="e.g. https://robinhood.com/..."
              className="w-full bg-black/80 border border-zinc-700/80 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#9FD401] focus:ring-1 focus:ring-[#9FD401] transition-all font-mono text-sm sm:text-base shadow-inner"
            />
            <p className="text-zinc-400 text-xs sm:text-sm font-frygia mt-2 ml-1">
              Used across all 'Buy $BLKFUEL' buttons. Must be a valid URL.
            </p>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-zinc-800/80">
            <Magnetic strength={0.15}>
              <button
                type="submit"
                disabled={saving}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-[#9FD401] hover:bg-[#b2ee02] disabled:bg-zinc-800 disabled:text-zinc-500 text-black font-morton font-black text-lg sm:text-xl uppercase tracking-wider shadow-[0_0_20px_rgba(159,212,1,0.3)] hover:shadow-[0_0_35px_rgba(159,212,1,0.6)] transition-all duration-300 transform active:scale-95"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                    <span>SAVING...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>SAVE CONFIGURATION</span>
                  </>
                )}
              </button>
            </Magnetic>
          </div>
        </form>
      </div>
    </div>
  )
}
