import {Mesh} from 'babylonjs';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

// each Aricle is a firebase document
export interface Article {
    id: string; // firebase generated;
    createDate?: Timestamp;
    lastUpdated?: Timestamp;
    owner?: string; // the user id who created the article & can CRUD the article
    participators?: string []; // array of participators user IDs who can edit the article  (10 participators limit)
    children?: string []; // array of article ids from the firestore collection of articles (10 children limit)

    title?: string; // Header Title
    subtitle?: string; // Sub Header Title
    images: string[]; // an array of images (10 images limit)
    videos: string[]; // an array of videos (10 videos limit)
    tags?: string []; // for easier search (unlimited)
    description?: string; // item view description
    content?: string; // CK Editor html content
    externalMeshes?: string[]; // array of URLs of meshes objects (10 meshes limit)
    meshes?: Mesh[]; // babylonjs Meshes

}

