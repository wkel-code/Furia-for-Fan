
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PersonalDataFormProps {
  onNext: () => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
  });

  const [documents, setDocuments] = useState({
    idDocument: null as File | null,
    selfie: null as File | null,
  });

  const [previewUrls, setPreviewUrls] = useState({
    idDocument: '',
    selfie: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Basic CPF formatting
    if (name === 'cpf') {
      const formatted = formatCPF(value);
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    // Basic phone formatting
    if (name === 'phone') {
      const formatted = formatPhone(value);
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const formatCPF = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply CPF mask: XXX.XXX.XXX-XX
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    } else if (digits.length <= 9) {
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    } else {
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
    }
  };

  const formatPhone = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply phone mask: (XX) XXXXX-XXXX
    if (digits.length <= 2) {
      return digits.length ? `(${digits}` : digits;
    } else if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    
    if (!files || !files[0]) return;
    
    const file = files[0];
    
    // Create a preview URL
    const url = URL.createObjectURL(file);
    
    if (name === 'idDocument') {
      setDocuments({ ...documents, idDocument: file });
      setPreviewUrls({ ...previewUrls, idDocument: url });
    } else if (name === 'selfie') {
      setDocuments({ ...documents, selfie: file });
      setPreviewUrls({ ...previewUrls, selfie: url });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form fields
    if (!formData.name || !formData.email || !formData.phone || !formData.cpf) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    
    // In a real app, we would store this data or send it to an API
    // For now, just move to the next step
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-in">
      <h3 className="text-2xl md:text-3xl text-furia-orange mb-6">Dados Pessoais</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-furia-white">Nome Completo</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Seu nome completo"
            className="furia-input w-full"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-furia-white">E-mail</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="seu@email.com"
            className="furia-input w-full"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-furia-white">Telefone</label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(XX) XXXXX-XXXX"
              className="furia-input w-full"
              maxLength={15}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="cpf" className="block text-furia-white">CPF</label>
            <Input
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              placeholder="XXX.XXX.XXX-XX"
              className="furia-input w-full"
              maxLength={14}
              required
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xl text-furia-white">Documentos</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ID Document Upload */}
            <div>
              <label className="block text-furia-white mb-2">RG/CPF</label>
              <div className="relative h-40 border-2 border-dashed border-furia-orange/50 rounded-md flex flex-col items-center justify-center bg-black/40 overflow-hidden">
                {previewUrls.idDocument ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={previewUrls.idDocument} 
                      alt="ID Document Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <button 
                        type="button" 
                        className="text-white bg-red-500 p-1 rounded-full"
                        onClick={() => {
                          setDocuments({ ...documents, idDocument: null });
                          setPreviewUrls({ ...previewUrls, idDocument: '' });
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    <p className="text-furia-gray text-sm mb-2">Arraste ou clique para fazer upload</p>
                    <input 
                      type="file" 
                      name="idDocument" 
                      id="idDocument" 
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </>
                )}
              </div>
            </div>
            
            {/* Selfie Upload */}
            <div>
              <label className="block text-furia-white mb-2">Selfie</label>
              <div className="relative h-40 border-2 border-dashed border-furia-orange/50 rounded-md flex flex-col items-center justify-center bg-black/40 overflow-hidden">
                {previewUrls.selfie ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={previewUrls.selfie} 
                      alt="Selfie Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <button 
                        type="button" 
                        className="text-white bg-red-500 p-1 rounded-full"
                        onClick={() => {
                          setDocuments({ ...documents, selfie: null });
                          setPreviewUrls({ ...previewUrls, selfie: '' });
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-furia-orange mb-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                    <p className="text-furia-gray text-sm mb-2">Arraste ou clique para fazer upload</p>
                    <input 
                      type="file" 
                      name="selfie" 
                      id="selfie" 
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6">
          <Button type="submit" className="furia-btn w-full">
            Próximo Passo
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PersonalDataForm;
